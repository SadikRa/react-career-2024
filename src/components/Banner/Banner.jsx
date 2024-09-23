
import img from '../../assets/hardy.png'

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 items-center justify-center text-center mb-24 mt-12">
      <div className='flex flex-col gap-10  items-start text-left'>
        <h2 className="text-5xl">
          One Step <br /> Closer To Your <br />
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
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
