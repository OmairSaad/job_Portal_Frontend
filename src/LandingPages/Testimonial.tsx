import { Carousel } from "@mantine/carousel";
import { Avatar, Rating } from "@mantine/core";
import { testimonialsData } from "../Data/Data";
import { IconPlayerTrackNext, IconPlayerTrackPrev } from "@tabler/icons-react";
const Testmonials = () => {
    return (
        <div className="mt-5 pb-5">
            <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-2">What  <span className="text-bright-sun-400">User </span>says about us?</div>
            <div className="text-lg text-mine-shaft-300 mb-10 mx-auto text-center w-1/2">Effortlessly navigate through the process and land your dream job.</div>

            <Carousel slideSize="22%" slideGap="md" align="center" loop dragFree nextControlIcon={<IconPlayerTrackNext className="w-4 h-4" />} previousControlIcon={<IconPlayerTrackPrev className="w-4 h-4" />} className="[&_button]:!bg-bright-sun-400 [&_button]:!outline-none [&_button]:!border-none [&_button]:!opacity-0 [&_button]:hover:!opacity-75 hover:[&_button]:!opacity-100">
                {
                    testimonialsData.map((data,index) => (
                        <Carousel.Slide key={index} >
                            <div className="card flex flex-col w-full p-2 border-bright-sun-400 border rounded-lg gap-2 backdrop-blur-md cursor-pointer select-none">
                                <div className="flex items-center gap-2">
                                    <div>
                                        <Avatar src="/assets/avatar1.png" />
                                    </div>
                                    <div>
                                        <div className="text-mine-shaft-100 text-xl text-center font-bold">
                                            {data.name}
                                        </div>
                                        <div>
                                            <Rating value={data.rating} fractions={2} readOnly />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-mine-shaft-200 w-ful">
                                    {data.des}
                                </div>
                            </div>
                        </Carousel.Slide>
                    ))
                }
            </Carousel>


        </div>
    )
}

export default Testmonials;