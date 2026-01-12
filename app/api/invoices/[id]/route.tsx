import { NextRequest } from "next/server"
import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export async function GET(_req: NextRequest, ctx: RouteContext<'/api/invoices/[id]'>) {
    const { id } = await ctx.params
    const searchQueryParams = _req.nextUrl.searchParams
    const cookiesStore = await cookies()
    const headersList = await headers()
    // const token = _req.cookies.get('token')
    const asd = searchQueryParams.get('asd')

    const url = _req.url
    return new Response(`Invoice ID: ${id} ${url} ${cookiesStore.getAll().length} ${headersList.get('host')} ${asd}`, { status: 200 })
}