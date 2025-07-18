import MaxWidthWrapper from "../components/views/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";

const perks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your digital assets delivered to your email instantly after purchase and download them directly.",
  },
  {
    name: "Guaranteed Quality",
    icon: CheckCircle,
    description:
      "Every asset on our platform is verified by our team to ensure the highest quality standards. Not happy? We offer a 30-day money-back guarantee.",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    description:
      "We have pledged to plant a tree for every purchase made on our platform. Join us in making a positive impact on the environment.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl text-foreground font-bold tracking-tight">
            Your Marketplace for High Quality{" "}
            <span className="text-primary font">Digital Assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure highest quality standards.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products">Browse Trending</Link>
        </div> */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button variant="default" size="lg">
              Browse Trending
            </Button>
            <Button variant="outline" size="lg">
              Our Quality promise &rarr;
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* TODO: List Products */}

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk, index) => (
              <div key={index} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-15 w-15 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <perk.icon className="h-1/3 w-1/3" />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
