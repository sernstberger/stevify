import * as numeral from "numeral";

const formattedNumber = (amount: number) => {
  return numeral(amount).format("0,0");
};

const money = (moneyAmount: number) => {
  return numeral(moneyAmount).format("$0,0.00");
};

const formatBytes = (bytes: number) => {
  if(bytes < 1024) return bytes + " Bytes";
  else if(bytes < 1048576) return(bytes / 1024).toFixed(3) + " KB";
  else if(bytes < 1073741824) return(bytes / 1048576).toFixed(3) + " MB";
  else return(bytes / 1073741824).toFixed(3) + " GB";
};

function sort(values: any[], fieldName: any, orderDirection: string) {
  return values.sort((a, b) => {
    const A = a[fieldName].toLowerCase();
    const B = b[fieldName].toLowerCase();
    if (orderDirection === "ASC") {
      if (A < B) { return -1; }
      if (A > B) { return 1; }
    } else if (orderDirection === "DESC") {
      if (A > B) { return -1; }
      if (A < B) { return 1; }
    }
    return 0;
  });
}

export {
  formatBytes,
  formattedNumber,
  money,
  sort,
};
