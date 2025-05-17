export interface ExpInterface {
    role: string,
    company: string,
    location: string,
    joinDate: string,
    endDate: string,
    desc: string

}
export interface CerInterface {
    certificate: string,
    company: string,
    date: string,
    id: string
}
export interface profileInterface {
    company: string,
    name: string,
    role: string,
    loacation: string,
    about: string,
    skills: string[],
    exprience: ExpInterface[]
    certifications: CerInterface[]

}

