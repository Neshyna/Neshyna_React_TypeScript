import { Dispatch, SetStateAction } from "react";

export interface UserData {
  firstName: string;
  lastName: string;
}

export interface BlogManagementContextType {
  data: UserData | undefined;
  onDataChange?: Dispatch<SetStateAction<UserData | undefined>> | (() => void);
}
