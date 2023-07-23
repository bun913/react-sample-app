export const Container = (props: {
  title: string;
  children: React.ReactNode;
}) => {
  const { title, children } = props;
  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  );
};

export const Parent = () => {
  return (
    <Container title="Parent">
      <p>ここが赤くなるはず</p>
    </Container>
  );
};
