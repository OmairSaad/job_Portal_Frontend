import { notifications } from "@mantine/notifications"
import { IconCheck, IconX } from "@tabler/icons-react"

const succesNotf = (title: string, message: string) => {
    notifications.show({
        title: title,
        message: message,
        position:"top-center",
        withBorder:true,
        autoClose:2000,
        color:"teal",
        icon: <IconCheck style={{width:"90%", height:"90%"}} />
      })
}

const errorNotf = (title: string, message: string) => {
    notifications.show({
        title: title,
        message: message, 
        position:"top-center",
        withBorder:true, 
        autoClose:2000,
        icon: <IconX style={{width:"90%", height:"90%"}} />,
        color:"red"
      })
}

export {succesNotf,errorNotf}