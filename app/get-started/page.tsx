import { Header } from "@/components/companyportal/header"
import { GetStartedForm } from "@/components/companyportal/get-started-form"
import { Footer } from "@/components/companyportal/footer"

export default function GetStartedPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <GetStartedForm />
      <Footer />
    </main>
  )
}
