import React from 'react'

function Hero() {
    return (
        <section className="bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center">
                    <div className="w-28 h-1 bg-lime-500 mx-auto mb-4 rounded-full" />
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
                        Build a Website That
                        <br />
                        Converts Visitors Into Customers
                    </h1>
                   
                </div>

                <div className="mt-14 border-t border-slate-200 pt-10 flex items-center justify-center">
                    <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between gap-8">
                        <div className="text-center md:text-left flex flex-col justify-center">
                            <p className="text-xs uppercase tracking-widest text-slate-500">+100</p>
                            <p className="text-2xl font-bold text-slate-900">Satisfied Customers</p>
                        </div>

                        <div className="flex items-center justify-center -space-x-3">
                            <img className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80" alt="Customer 1" />
                            <img className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80" alt="Customer 2" />
                            <img className="w-10 h-10 rounded-full border-2 border-white shadow" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80" alt="Customer 3" />
                            <div className="w-10 h-10 rounded-full bg-lime-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow">
                                +100
                            </div>
                        </div>

                         <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                        Helping local businesses in Colorado grow <br /> with conversion-focused digital systems.
                    </p>
                    </div>

                   
                </div>

                <div className="mt-8 text-center">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3 rounded text-base font-semibold shadow-lg hover:bg-slate-800 transition-colors"
                    >
                        Book a free Strategy Call
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero