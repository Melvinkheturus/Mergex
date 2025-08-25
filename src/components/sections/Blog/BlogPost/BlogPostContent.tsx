"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ReactNode } from "react";

type BlogPostContentProps = {
  content?: ReactNode;
  children?: ReactNode;
};

const BlogPostContent = ({ content, children }: BlogPostContentProps) => {
  // If content is provided, use it; otherwise, use children
  const contentToRender = content || children;

  return (
    <section className="w-full py-8">
      <div className="container mx-auto px-4">
        <motion.article 
          className="prose prose-lg mx-auto max-w-3xl dark:prose-invert prose-headings:font-bold prose-headings:text-white prose-p:text-gray-300 prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-900/20 prose-blockquote:p-4 prose-blockquote:rounded-md prose-blockquote:not-italic prose-blockquote:text-gray-200 prose-strong:text-white prose-code:text-purple-300 prose-code:bg-purple-900/20 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-pre:bg-gray-900 prose-img:rounded-xl prose-img:shadow-lg prose-hr:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* If no content is provided, render a default example */}
          {contentToRender || (
            <>
              <h2>The Problem with Most Startup Designs</h2>
              <p>
                When launching a startup, design often takes a backseat to functionality. This is understandable—you want to get your product to market quickly. However, neglecting design can severely impact your ability to attract and retain users.
              </p>
              
              <p>
                In our experience working with over 50 startups, we've identified five common design mistakes that can sabotage your growth potential before you even get started.
              </p>
              
              <h3>1. Prioritizing Aesthetics Over Usability</h3>
              <p>
                Many startups fall into the trap of creating visually stunning interfaces that fail to deliver on basic usability principles. While a beautiful design might attract initial attention, users will quickly abandon your product if they can't figure out how to use it.
              </p>
              
              <blockquote>
                <p>"Users don't care how pretty your interface is if they can't accomplish their goals. Design should remove friction, not create it."</p>
              </blockquote>
              
              <p>
                Instead, focus on creating intuitive user flows that guide users naturally through your product. Test your designs with real users early and often to identify pain points before they become embedded in your product.
              </p>
              
              <div className="relative my-8 h-[300px] w-full overflow-hidden rounded-xl">
                <Image 
                  src="/images/blog/usability-example.jpg" 
                  alt="Usability example showing a clean, intuitive interface" 
                  fill 
                  className="object-cover"
                />
              </div>
              
              <h3>2. Inconsistent Visual Language</h3>
              <p>
                Another common mistake is failing to establish a consistent visual language across your product. This includes everything from color schemes and typography to button styles and iconography.
              </p>
              
              <p>
                Inconsistency creates cognitive load for your users, making your product feel disjointed and unprofessional. It also makes your codebase more difficult to maintain as you scale.
              </p>
              
              <h3>3. Neglecting Mobile Responsiveness</h3>
              <p>
                In 2025, over 70% of web traffic comes from mobile devices. Yet many startups still design for desktop first, treating mobile as an afterthought. This approach inevitably leads to compromised mobile experiences that frustrate users.
              </p>
              
              <ul>
                <li>Adopt a mobile-first design approach</li>
                <li>Test your product on multiple device sizes</li>
                <li>Consider how touch interactions differ from mouse interactions</li>
                <li>Optimize load times for mobile networks</li>
              </ul>
              
              <h3>4. Overlooking Accessibility</h3>
              <p>
                Accessibility is not just a nice-to-have—it's essential for reaching the widest possible audience. Many startups ignore basic accessibility principles, effectively excluding millions of potential users with disabilities.
              </p>
              
              <p>
                Common accessibility oversights include poor color contrast, missing alt text for images, keyboard navigation issues, and lack of semantic HTML structure.
              </p>
              
              <h3>5. Designing in a Vacuum</h3>
              <p>
                Perhaps the most dangerous mistake is designing without user feedback. Many founders fall in love with their own ideas and fail to validate them with real users until it's too late.
              </p>
              
              <p>
                Establish a continuous feedback loop with your users from day one. Use prototypes, user interviews, and analytics to inform your design decisions rather than relying on assumptions.
              </p>
              
              <h2>How to Avoid These Mistakes</h2>
              <p>
                The good news is that these mistakes are entirely avoidable with the right approach:
              </p>
              
              <ol>
                <li><strong>Start with user research</strong>: Understand your users' needs, pain points, and goals before designing anything.</li>
                <li><strong>Create design systems</strong>: Establish a consistent visual language and component library that can scale with your product.</li>
                <li><strong>Test early and often</strong>: Get your designs in front of real users as quickly as possible and iterate based on their feedback.</li>
                <li><strong>Prioritize accessibility</strong>: Make accessibility a core requirement, not an optional enhancement.</li>
                <li><strong>Measure the impact</strong>: Use analytics to understand how your design decisions affect user behavior and business outcomes.</li>
              </ol>
              
              <p>
                By avoiding these common pitfalls, you'll create a product that not only looks good but also delivers real value to your users—setting the foundation for sustainable growth.
              </p>
            </>
          )}
        </motion.article>
      </div>
    </section>
  );
};

export default BlogPostContent;