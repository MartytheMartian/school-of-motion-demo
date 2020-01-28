// Supported methods.
export enum Method {
  Get = "get",
  Post = "post",
  Put = "put",
  Delete = "delete"
};

// Error occurs when a fetch operation fails.
export class FetchError extends Error {
  constructor(public message: string, public request: Request,
    public statusCode?: number) {
    super(message);
  }
}

// Supported request headers.
export class Request implements RequestInit {
  public url: string;
  public body?: BodyInit | null;
  public cache?: RequestCache;
  public credentials?: RequestCredentials;
  public headers?: HeadersInit;
  public integrity?: string;
  public keepalive?: boolean;
  public method?: string;
  public mode?: RequestMode;
  public redirect?: RequestRedirect;
  public referrer?: string;
  public referrerPolicy?: ReferrerPolicy;
  public signal?: AbortSignal | null;
  public window?: any;

  constructor(route: string, method: Method, body?: object) {
    // Set standard properties.
    this.url = "http://localhost" + route;
    this.method = method.toString();
    this.mode = "cors";

    // Serialize the body.
    if (body) {
      this.body = JSON.stringify(body);
    }

    // Standard headers.
    this.headers = {
      "content-type": "application/json"
    };

    // Append 'get' headers if necessary.
    if (method === Method.Get) {
      this.headers["cache-control"] = "no-cache";
      this.headers["pragma"] = "no-cache";
    }
  }
}

export async function Do<T>(request: Request): Promise<T> {
  // Need a populated status code no matter what.
  let statusCode = undefined;

  try {
    // Perform the request.
    const response = await fetch(request.url, request as RequestInit);

    // Read the body.
    let responseBody = null;
    const unparsedBody = await response.text();
    if (unparsedBody) {
      responseBody = JSON.parse(unparsedBody);
    }


    // Good response.
    if (response.ok) {
      return responseBody as T;
    }

    // Read the message.
    statusCode = response.status;
    const message = responseBody ? responseBody : "Request Failed";

    throw new FetchError(message, request, statusCode);
  } catch (error) {
    if (error instanceof FetchError) {
      throw error;
    }

    throw new FetchError("Failed to get a response", request, statusCode);
  }
}