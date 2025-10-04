import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Download, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Admission = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
              Admission Information
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center mt-4">
              Join our community of learners
            </p>
          </div>
        </section>

        {/* Admission Process */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Admission Process
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Submit Application Form
                    </h3>
                    <p className="text-muted-foreground">
                      Download and fill out the admission application form.
                      Submit it along with required documents at the school
                      office or online.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Entrance Examination
                    </h3>
                    <p className="text-muted-foreground">
                      Students will be required to take an entrance examination
                      to assess their academic level and readiness.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Parent Interview
                    </h3>
                    <p className="text-muted-foreground">
                      A meeting with parents/guardians to discuss educational
                      goals, expectations, and school policies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Admission Confirmation
                    </h3>
                    <p className="text-muted-foreground">
                      Upon successful completion of the process, you will
                      receive an admission letter. Complete the enrollment by
                      paying the required fees.
                    </p>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Completed application form (download below)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Birth certificate (original and photocopy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Previous school transcript/mark sheets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Transfer certificate (TC) from previous school</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Character certificate from previous school</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Recent passport-size photographs (4 copies)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Parent/Guardian citizenship photocopy</span>
                  </li>
                </ul>
              </div>

              {/* Downloads & Contact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/50 p-6 rounded-lg">
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Admission Prospectus
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Download our complete admission prospectus for detailed
                    information.
                  </p>
                  <Button
                    variant="outline"
                    className="text-[#81B82E] border-[#81B82E] hover:border-none"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>

                <div className="bg-accent/50 p-6 rounded-lg">
                  <FileText className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Application Form
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Download the admission application form and submit with
                    documents.
                  </p>
                  <Button
                    variant="outline"
                    className="text-[#81B82E] border-[#81B82E] hover:border-none"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Form
                  </Button>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 p-8 bg-primary rounded-lg">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Ready to Apply?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  For more information or assistance with the admission process,
                  contact our office.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={"/contact"}>
                    {" "}
                    <Button variant="outline" size="lg">
                      Contact Admission Office
                    </Button>
                  </Link>

                  <Button
                    variant="admission"
                    size="lg"
                    className="bg-background text-primary hover:bg-background/90"
                  >
                    Apply Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Admission;
