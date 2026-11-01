export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? (
        <p
          className={`mb-2 text-xs font-bold tracking-[0.18em] uppercase ${
            invert ? "text-orange" : "text-orange"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          invert ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 text-base leading-relaxed ${invert ? "text-white/85" : "text-gray"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}