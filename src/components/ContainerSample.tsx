export const Container = (props: {
  title: string;
  children: React.ReactElement;
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
    <Container title="Hello">
      <p>ここが赤くなるはず</p>
    </Container>
  );
};
