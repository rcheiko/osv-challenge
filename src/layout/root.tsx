import bandeau from "../assets/bandeau_osv.png";

export default function Root(props: any) {
  return (
    <div className="grid justify-center">
      <div className="background" />
      <div className="z-10">
        <img src={bandeau} className="mb-4" />
        <h1 className="text-center text-red-600 text-2xl font-bold my-6">
          OSV Challenge
        </h1>
        {props.children}
      </div>
    </div>
  );
}