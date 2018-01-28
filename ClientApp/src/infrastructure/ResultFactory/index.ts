
import IResult from "./IResult";
import Error from "./results/Error";
import Success from "./results/Success";

class ResultFactory {
  public static createInstance(response: any): IResult {
    if (response.statusMessage === "OK") {
      return new Success(response);
    }
    return new Error(response);
  }
}

function handleResult(result: IResult,
                      success: (x: any) => any,
                      error: (e: Error) => void): Error | any {

  switch (result.kind) {
    case Success.KIND: return success(result);
    case Error.KIND: return error(result as Error);
    default:
      return new Error({error: "Error was not caught correctly"});
  }
}

function mapOne<T>(data: any, type: { new(...args: any[]): T }): T {
  return new type(data);
}

function mapMany<T>(data: any, type: { new(...args: any[]): T }): T[] {
  const values = new Array<T>();
  data.map((e: any) => values.push(new type(e)));
  return values;
}

export {
  handleResult,
  mapOne,
  mapMany,
  IResult,
  Error,
  Success,
};

export default ResultFactory;
