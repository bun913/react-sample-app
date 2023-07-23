const Text = (props: { content: string }) => {
  const { content } = props;
  return <p>{content}</p>;
};

export const Message = (props: {}) => {
  const content1 = "This is a parent component.";
  const content2 = "Message uses Text component";
  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  );
};
