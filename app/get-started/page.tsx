import { Header } from "@/components/homepage/header"
import { GetStartedForm } from "@/components/homepage/get-started-form"
import { Footer } from "@/components/homepage/footer"

export default function GetStartedPage() {
  return (
    <main className="bg-background text-foreground">
      <Header />
      <GetStartedForm />
      <Footer />
    </main>
  )
}
