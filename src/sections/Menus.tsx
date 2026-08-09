
import { useState } from 'react'
import { SectionReveal } from '../components/SectionReveal'
import { MagneticButton } from '../components/MagneticButton'
import { cn } from '../lib/utils'

const menuCategories = [
  {
    id: 'dinner',
    name: 'Dinner',
    pdf: 'https://www.obelixchicago.com/s/Dinner-073026.pdf',
    items: [
      {
        name: 'Steak Tartare',
        description:
          'Filet mignon, Osetra Noir caviar, wild onion ravigote, egg yolk jam, sourdough',
        price: '55',
      },
      {
        name: 'Soupe à l\'Oignon Gratinée',
        description:
          'French onion soup, beef broth, Swiss cheese, croutons',
        price: '20',
      },
      {
        name: '10-Day Dry-Aged Duck Breast',
        description:
          'Rohan duck breast, crépinette de canard, summer relish, shiitake mushroom, seedling peaches',
        price: '48',
      },
      {
        name: 'Beef Wellington',
        description:
          'Filet mignon, mushroom duxelles, prosciutto, crêpe, puff pastry with frites and sauce au poivre',
        price: '140',
      },
    ],
  },
  {
    id: 'brunch',
    name: 'Brunch',
    pdf: 'https://www.obelixchicago.com/s/Brunch-72526.pdf',
    items: [
      {
        name: 'Crêpe Homard',
        description: 'Lobster crêpe with seasonal accompaniments',
        price: '50',
      },
      {
        name: 'Foie Gras and Pancake',
        description: 'Seared foie gras, buttermilk pancake, seasonal fruit',
        price: '33',
      },
      {
        name: 'Au Poivre Burger',
        description: 'Pepper-crusted burger with sauce au poivre',
        price: '26',
      },
      {
        name: 'Peaches & Cream French Toast',
        description: 'Brioche, peaches, mascarpone, maple',
        price: '18',
      },
    ],
  },
  {
    id: 'lunch',
    name: 'Lunch & Prix Fixe',
    pdf: 'https://www.obelixchicago.com/s/Lunch-PF-073026_merged.pdf',
    items: [
      {
        name: 'Prix Fixe',
        description:
          'Choice of starter, entrée, and dessert — a complete Obélix experience',
        price: '49',
      },
      {
        name: 'Escargots à la Bourguignonne',
        description: 'Snails, garlic, parsley',
        price: '18',
      },
      {
        name: 'Sakura Pork Chop',
        description: 'Grilled pork chop with seasonal sides',
        price: '38',
      },
      {
        name: 'Quiche',
        description: 'Daily quiche with market vegetables',
        price: '22',
      },
    ],
  },
]

export function Menus() {
  const [activeTab, setActiveTab] = useState('dinner')
  const activeMenu = menuCategories.find((cat) => cat.id === activeTab)

  return (
    <section id="menus" className="relative py-32 md:py-40 bg-obelix-cream">
      <div className="w-full px-6 lg:px-12">
        <SectionReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-obelix-burgundy mb-6">
            Menus
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-obelix-charcoal leading-[1.1]">
            Seasonal,
            <br />
            <span className="italic">Thoughtfully French</span>
          </h2>
        </SectionReveal>

        {/* Tabs */}
        <SectionReveal className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                'px-6 py-3 font-body text-xs tracking-[0.2em] uppercase transition-all duration-300 border rounded-sm',
                activeTab === category.id
                  ? 'bg-obelix-burgundy text-obelix-cream border-obelix-burgundy'
                  : 'bg-transparent text-obelix-charcoal border-obelix-charcoal/20 hover:border-obelix-burgundy hover:text-obelix-burgundy'
              )}
            >
              {category.name}
            </button>
          ))}
        </SectionReveal>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          {activeMenu && (
            <div className="space-y-8">
              {activeMenu.items.map((item, index) => (
                <div
                  key={item.name}
                  className="group flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-obelix-charcoal/10 last:border-0"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl text-obelix-charcoal group-hover:text-obelix-burgundy transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-body text-sm md:text-base text-obelix-charcoal/70 mt-2 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-2xl text-obelix-burgundy whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="font-body text-sm text-obelix-charcoal/60 mb-6">
              View full menus including cocktails, wines by the glass, dessert,
              and our extensive wine list.
            </p>
            <MagneticButton
              href={activeMenu?.pdf}
              variant="outline"
            >
              Full {activeMenu?.name} Menu
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  )
}
