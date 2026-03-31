import { Separator } from "@/components/ui/separator";
import { team } from "@/lib/team";

export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-(--breakpoint-lg) flex-col px-6 pb-20 sm:px-20 sm:pb-24">
      <h1 className="mt-32 text-xl font-bold uppercase sm:mt-64">
        Our Mission
      </h1>
      <h1 className="mt-2 scroll-m-20 text-4xl font-extrabold tracking-tight">
        Reaching out with solar
      </h1>
      <p className="mt-6 text-lg/7">
        At Solar Reach, we are a team of passionate high school students
        committed to making a positive impact on communities with limited access
        to electricity.
        <br />
        <br />
        As a 501(c)(3 nonprofit organization, our mission is to develop and
        distribute solar-powered lights to communities with limited electricity
        access. We believe that everyone deserves the chance to thrive, study,
        and live safely—regardless of their access to the electrical grid.
        <br />
        <br />
        Our initiative is simple yet powerful: we design, build, and distribute
        solar-powered lights that offer reliable illumination to underserved
        regions. Through this effort, we aim to support education, enhance
        safety, and contribute to environmental sustainability by utilizing
        renewable energy.
        <br />
        <br />
        Driven by a shared vision of a brighter future, we are proud to play a
        role in bringing light to the places that need it most.
      </p>

      <h1 className="mt-8 text-xl font-bold uppercase sm:mt-16">Our Team</h1>
      <Separator className="bg-foreground mt-2"></Separator>

      <div className="mt-8">
        <ul className="divide-foreground divide-y xl:col-span-3">
          {team.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0"
            >
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg/8 font-semibold tracking-tight">
                  {person.name}
                </h3>
                <p className="mt-2 text-base/7">{person.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
