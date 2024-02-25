export async function GET(): Promise<Response> {
    const res: Response = await fetch('/')
    const data: any = await res.json()
    const payload: Response = Response.json({ data })

    return payload
}
