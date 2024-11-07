import { useState, useEffect } from "react";
import * as path from "path";
import fs from "fs/promises";
import { data } from "@remix-run/router";
import Floor from "../pages/Floor/Floor";
import { link } from "fs";
interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity: string;
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  //FILL HERE LOGIC TO SET THE BUILDING DATA
  useEffect(() => {
    const gettingData = async () => {
      try {
        const res = await fs.readFile(
          `NimrodiBuilding/src/data/building.json`,
          "utf-8"
        );
        if (res) {
          throw new Error(`HTP error! status: ${res}}`);
        }
        const data: Floor[] = await JSON.parse(res);
        setBuildingData(data);
      } catch (error) {
        console.log(error);
      }
    };
    gettingData();
  }, []);
  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    //FILL HERE
    const floor:Floor = buildingData[floorIndex];
    if (floor) {
      return floor;
    } else return undefined;
  };
  const getListOfActivities = (): string[] => {
    //FILL HERE
    const actives: string[] = buildingData.reduce(
      (listi: any, curr: Floor) => listi.push(curr.activity),
      []
    );
    return actives;
  };
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities,
  };
};

export default useBuildingData;
