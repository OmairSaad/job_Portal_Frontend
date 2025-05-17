import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return (
        <div className="bg-mine-shaft-950 pb-10">
            <div className="flex items-center bg-mine-shaft-900 mx-20 py-10 rounded-xl justify-around">
                <div className="text-4xl w-2/5 text-center font-semibold text-mine-shaft-100 mb-2">Never Miss Any  <span className="text-bright-sun-400">Job Updates</span></div>


                <div className="flex gap-4 bg-mine-shaft-700 px-3 py-2 items-center rounded-lg">
                    <TextInput className="[&_input]:!text-slate-100 font-semibold"
                        variant="unstyled"
                        placeholder="your@gmail.com"
                        size="xl"
                    />
                    <Button size="lg" className="!rounded-lg" variant="filled" color="bright-sun.4">Subscribe</Button>
                </div>
            </div>
        </div>
    )
}

export default Subscribe;