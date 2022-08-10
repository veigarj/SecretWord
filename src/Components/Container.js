const Container = ({ children, myValue }) => {
  return (
    <div>
      <h2>Este e o titulo do Container</h2>
      {children}
      <p>O valor e: {myValue} </p>
    </div>
  );
};
export default Container;
