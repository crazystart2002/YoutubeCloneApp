export const create_error = (status, message)=>{
    const err = new Error()
    err.message=message
    err.status=status
    return err
}