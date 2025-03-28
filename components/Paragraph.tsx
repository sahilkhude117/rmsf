export const Paragraph = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-center px-4 pb-5">
      <p className="text-center font-semibold text-sm sm:text:xl lg:text-2xl max-w-4xl w-full">
        {content}
      </p>
    </div>
  );
};
