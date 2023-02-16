import { useRouteError } from "react-router-dom"

type Error = {
  statusText: string
  message: string
}

const isError = (obj: unknown): obj is Error => "statusText" in (obj as Error) || "message" in (obj as Error)

const Error = () => {
  const obj = useRouteError()
  let error: Error

  if (isError(obj)) {
    error = obj
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    )
  } else {
    return (
      <>
        <h1>unknown error</h1>
      </>
    )
  }
}

export { Error }
