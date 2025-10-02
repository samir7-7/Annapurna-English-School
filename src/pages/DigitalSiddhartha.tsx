import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, CreditCard, Shield, Zap } from "lucide-react";

const DigitalSiddhartha = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground text-center">
              Digital Siddhartha
            </h1>
            <p className="text-xl text-primary-foreground/90 text-center mt-4">
              Making payments easy and secure with eSewa
            </p>
          </div>
        </section>

        {/* eSewa Integration */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-lg mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Online Fee Payment with eSewa</h2>
                <p className="text-lg text-muted-foreground text-center mb-8">
                  Millennium Siddhartha Education Foundation, Jhapa is now connected with eSewa. Our parents and guardians can now conveniently pay school fees using the eSewa app.
                </p>
                <div className="flex justify-center">
                  <Button variant="admission" size="lg">
                    Make Payment Now
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-accent/50 p-6 rounded-lg">
                  <Smartphone className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Easy & Convenient</h3>
                  <p className="text-muted-foreground">
                    Pay school fees anytime, anywhere using your smartphone. No need to visit the school office.
                  </p>
                </div>

                <div className="bg-accent/50 p-6 rounded-lg">
                  <Shield className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                  <p className="text-muted-foreground">
                    All payments are encrypted and secure. Your financial information is protected.
                  </p>
                </div>

                <div className="bg-accent/50 p-6 rounded-lg">
                  <Zap className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Instant Confirmation</h3>
                  <p className="text-muted-foreground">
                    Receive immediate confirmation of your payment with transaction details.
                  </p>
                </div>

                <div className="bg-accent/50 p-6 rounded-lg">
                  <CreditCard className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Multiple Payment Options</h3>
                  <p className="text-muted-foreground">
                    Pay using eSewa balance, bank account, or connect your debit/credit card.
                  </p>
                </div>
              </div>

              {/* How to Pay */}
              <div className="bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">How to Pay School Fees via eSewa</h2>
                <ol className="space-y-4">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</span>
                    <div>
                      <h4 className="font-semibold mb-1">Download eSewa App</h4>
                      <p className="text-muted-foreground">Install the eSewa mobile app from Google Play Store or Apple App Store.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</span>
                    <div>
                      <h4 className="font-semibold mb-1">Create Account & Login</h4>
                      <p className="text-muted-foreground">Register with your mobile number and complete KYC verification.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</span>
                    <div>
                      <h4 className="font-semibold mb-1">Select School Fee Payment</h4>
                      <p className="text-muted-foreground">Navigate to Education section and select Siddhartha Boarding School.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</span>
                    <div>
                      <h4 className="font-semibold mb-1">Enter Details & Pay</h4>
                      <p className="text-muted-foreground">Enter student ID, amount, and confirm payment. Save receipt for records.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalSiddhartha;
