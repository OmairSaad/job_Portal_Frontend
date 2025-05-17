import axios from "axios"
import { base_url } from "../Baseurl"
import { Certification, Experience, info, UserProfile } from "../Interfaces/UserProfile";

const getProfile = (id: number) => {
    return axios.get<UserProfile>(`${base_url}profiles/${id}`).then((res) => res)
        .catch((er) => {
            throw er;
        });
}

const updateInfo = (data: info, id: number) => {
    return axios.put<UserProfile>(`${base_url}profiles/${id}/info`, data).then((res) => res)
        .catch((er) => {
            throw er;
        });
}

const updateAbout = (about: string, id: number) => {
    console.log(about, id);
    return axios.put(`${base_url}profiles/${id}/about`, { about }).then((res) => res)
        .catch((er) => {
            throw er;
        });
}

const updateSkills = (skills: string[], id: number) => {
    const setOfSkiils = skills.map((skill) => {
        return { skillName: skill };
    });
    console.log(setOfSkiils);
    return axios.post(`${base_url}skills/${id}`, setOfSkiils).then((res) => res)
        .catch((er) => {
            throw er;
        });

}

const updateExprience = (exp: Experience, id: number) => {
    return axios.put(`${base_url}exprience/${id}`, exp).then((res) => res)
        .catch((er) => {
            throw er;
        })
}

const deleteExprience = (id: number) => {
    return axios.delete(`${base_url}exprience/${id}`).then((res) => res)
        .catch((er) => {
            throw er;
        })
}

const addExprience = (exp: Experience, id: number) => {
    return axios.post(`${base_url}exprience/${id}`, exp).then((res) => res)
        .catch((er) => {
            throw er;
        })
}

const updateCertifications = (cert: Certification, id: number) => {
    return axios.post(`${base_url}certifications/${id}`, cert).then((res) => res)
        .catch((er) => {
            throw er;
        })
}

const addCertifications = (cert: Certification, id: number) => {
    return axios.put(`${base_url}certifications/${id}`, cert).then((res) => res)
        .catch((er) => {
            throw er;
        })
}

const delCertifications = (id: number) => {
    return axios.delete(`${base_url}certifications/${id}`).then((res) => res)
        .catch((er) => {
            throw er;
        })
}

const updateProfilePicture = (picture: string, id: number) => {
    return axios.put(`${base_url}profiles/update-picture/${id}`, { "picture": picture }).then((res) => res)
        .catch((er) => {
            throw er;
        })
}

const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => reject("Something went wrong while reading the file.");
    });
};


const viewBase64Pdf = (base64String: string) => {
    // Step 1: Convert the Base64 string to a Blob
    const byteCharacters = atob(base64String); // Decode the Base64 string
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/pdf" });

    // Step 2: Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Step 3: Open the URL in a new tab or window
    window.open(url, "_blank");

    // Optional: Revoke the URL after opening to free up memory
    URL.revokeObjectURL(url);
};
export { getProfile, updateInfo, updateAbout, updateSkills, updateExprience, deleteExprience, addExprience, updateCertifications, addCertifications, delCertifications, updateProfilePicture, getBase64, viewBase64Pdf };