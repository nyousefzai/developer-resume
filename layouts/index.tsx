import Header from "./header";

interface indexProps {}

const Layouts: React.FC<indexProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layouts;
