type SectionHeadingProps = {
  number: string;
  title: string;
};

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>
        <span>{number}.</span> {title}
      </h2>
      <div aria-hidden="true" />
    </div>
  );
}
