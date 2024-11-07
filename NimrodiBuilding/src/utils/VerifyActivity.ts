import { Navigate } from "react-router-dom";
import roles from "../data/roles.json";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.7
  const indexro:number = roles.findIndex(r => r == role)
  const indexac = activities.findIndex(a => a == activity)
  return indexro >= indexac
};

export default useIsVerified;
