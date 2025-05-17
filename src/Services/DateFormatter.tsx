const formattedDate = (date: Date) => {
    const year = date.getFullYear(); // Get the full year (e.g., 2025)
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Get the month (0-indexed) and pad with 0
    const day = String(date.getDate()).padStart(2, '0'); // Get the day and pad with 0

    return `${year}-${month}-${day}`;
};

const formatToMonthYear = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        month: "short", // Short month name, e.g., "Jan"
        year: "numeric", // Full year, e.g., "2024"
    });
};
const formatToDayMonth = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
        month: "short", // Short month name, e.g., "Jan"
        day: "numeric"
    });
};

const formatToTime = (time: string) => {
    if(time){
        const[hour,minute] = time.split(":");
        return `${+hour - (+hour>12?12:0)}:${minute} ${+hour>12 ? "PM" : "AM"}`; // Convert to 12-hour format
    }
}
function calculateTimeDifference(inputTimestamp:string) {
    // Parse the input timestamp into a Date object
    const inputDate = new Date(inputTimestamp);

    // Get the current time in IST
    const now = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = now.getTime() - inputDate.getTime();

    // Convert the difference into seconds, minutes, hours, days, etc.
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    // Determine the appropriate time difference string
    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`;
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
}



export {formatToMonthYear,formattedDate,calculateTimeDifference, formatToDayMonth, formatToTime};