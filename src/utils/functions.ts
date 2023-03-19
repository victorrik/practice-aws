import dayjs from "dayjs";

type FormatsDays = "HH:mm" | "DD-MM-YYYY HH:mm"
export function stringDate(value:number = new Date().getTime(), format:FormatsDays = "DD-MM-YYYY HH:mm"){
	return dayjs(value).format(format)
}


export const sleep = (timeAwait: number = 0.5) =>
  new Promise((resolve: any, reject) =>
    setTimeout(() => {
      resolve();
    }, timeAwait * 1000)
  );

export const rndInterger = (min: number = 0, max: number = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
