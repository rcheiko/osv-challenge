import banner from "../assets/banner.png";

export default function Root(props: any) {
  return (
    <>
      <div className="relative banner z-20" />
      <div className="grid justify-center">
        <div className="background" />
        <div className="z-10">
          <h1 className="text-center text-red-600 text-2xl font-bold my-6">
            OSV Challenge
          </h1>
          {props.children}
        </div>
      </div>
    </>
  );
}