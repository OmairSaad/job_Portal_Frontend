import { Carousel } from "@mantine/carousel";
import { jobs } from "../Data/Data";
import { IconPlayerTrackNext, IconPlayerTrackPrev } from "@tabler/icons-react";
const JobCategory = () => {
    return (
        <div className="mt-10 py-10">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-2">Browse <span className="text-bright-sun-400">Job </span>Category</div>
            <div className="text-lg text-mine-shaft-300 mb-10 mx-auto text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
            <Carousel slideSize="22%" slideGap="md" align="center" loop dragFree nextControlIcon={<IconPlayerTrackNext className="w-4 h-4" />} previousControlIcon={<IconPlayerTrackPrev className="w-4 h-4" />} className="[&_button]:!bg-bright-sun-400 [&_button]:!outline-none [&_button]:!border-none [&_button]:!opacity-0 [&_button]:hover:!opacity-75 hover:[&_button]:!opacity-100">
                {
                    jobs.map((e) => (
                        <Carousel.Slide >
                            <div className="flex flex-col items-center w-64 border-bright-sun-400 border rounded-xl p-5 backdrop-blur-md hover:cursor-pointer hover:shadow-[0_0_15px_black] !shadow-bright-sun-500 transition duration-300 ease-in-out select-none">
                                <div className="rounded-full p-2 bg-bright-sun-300">
                                    <img src="src/assets/anounce.png" alt="anounce" className="w-8 h-8" />
                                </div>
                                <div className="text-mine-shaft-50 font-bold">{e.title}</div>
                                <div className="text-center text-mine-shaft-300">{e.des}</div>
                                <div className="text-bright-sun-300">{e.number}k new job posted</div>
                            </div>
                        </Carousel.Slide>
                    ))
                }
            </Carousel>
        </div>
    )
}
export default JobCategory;