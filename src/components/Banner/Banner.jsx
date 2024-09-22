const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div >
        <h2 className="text-center text-5xl">
          One Step Closer To Your <br />
          <span className="text-indigo-500">Dream Job</span>
        </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
      <div>
        <img src="../../assets/hardy.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
