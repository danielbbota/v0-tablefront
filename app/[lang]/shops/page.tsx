import { BusinessPage, businessMetadata } from "@/components/business/business-page"

type Params = Promise<{ lang: string }>

export function generateMetadata({ params }: { params: Params }) {
  return businessMetadata("shops", params)
}

export default function Page({ params }: { params: Params }) {
  return <BusinessPage type="shops" params={params} />
}
