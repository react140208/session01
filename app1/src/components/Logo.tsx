//component -> function return jsx
//             name PascalCase
interface LogoProps {
  msg: string;
  logo: string;
  rank?: number;
}
export default function Logo(props: LogoProps) {
  console.log(props);
  return (
    <div>
      <img src={props.logo} alt="React" className="logo react" />
      {/* <h1>Salam Donya</h1> */}
      <h1>{props.msg}</h1>
    </div>
  );
}
