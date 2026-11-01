import { google } from "googleapis";
import { mkdir, appendFile } from "fs/promises";
import path from "path";

export type EnquiryPayload = {
  fullName: string;
  workEmail: string;
  phone: string;
  companyName: string;
  employeeCount: string;
  industry: string;
  interest: string;
  message?: string;
  pageSource?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
};

function hasSheetsConfig() {
  return Boolean(
    process.env.GOOGLE_SHEETS_ID &&
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL &&
      process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  );
}

export async function appendEnquiryRow(payload: EnquiryPayload) {
  const submittedAt = new Date().toISOString();
  const row = [
    submittedAt,
    payload.fullName,
    payload.workEmail,
    payload.phone,
    payload.companyName,
    payload.employeeCount,
    payload.industry,
    payload.interest,
    payload.message ?? "",
    payload.pageSource ?? "",
    payload.utmSource ?? "",
    payload.utmMedium ?? "",
    payload.utmCampaign ?? "",
    payload.referrer ?? "",
  ];

  if (!hasSheetsConfig()) {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "enquiries.jsonl"),
      `${JSON.stringify({ submittedAt, ...payload })}\n`,
      "utf8",
    );
    return { mode: "local-fallback" as const };
  }

  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY!.replace(
    /\\n/g,
    "\n",
  );

  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_ID,
    range: "Enquiries!A:N",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });

  return { mode: "sheets" as const };
}

export const SHEET_HEADERS = [
  "Submitted At",
  "Full Name",
  "Work Email",
  "Phone",
  "Company",
  "Employee Count",
  "Industry",
  "Interest",
  "Message",
  "Page Source",
  "UTM Source",
  "UTM Medium",
  "UTM Campaign",
  "Referrer",
] as const;