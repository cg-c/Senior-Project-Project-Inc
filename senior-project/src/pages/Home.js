import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const types = ['Student', 'Advisor']

export default function Home() {
    let [isOpen, setIsOpen] = useState(false)
    let [selected, setSelected] = useState(types[0])

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
        <HeroSection />
        <div className="inset-0 flex">
            <button
                type="button"
                onClick={openModal}
                className="rounded-md bg-black/70 px-4 py-2 text-sm font-medium text-white hover:bg-black/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
            Popup
            </button>
        </div>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Account Type
                    </Dialog.Title>
                    <div className="mt-2">


                        <div className="w-full px-4 py-4">
                            <div className="mx-auto w-full max-w-md">
                                <RadioGroup value={selected} onChange={setSelected}>
                                
                                <div className="space-y-2">
                                    {types.map((type) => (
                                    <RadioGroup.Option
                                        key={type}
                                        value={type}
                                        className={({ active, checked }) =>
                                        `${
                                            active
                                            ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                                            : ''
                                        }
                                        ${checked ? 'bg-sky-900/75 text-white' : 'bg-white'}
                                            relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                        }
                                    >
                                        {({ active, checked }) => (
                                        <>
                                            <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">

                                                <RadioGroup.Label
                                                    as="p"
                                                    className={`font-medium  ${
                                                    checked ? 'text-white' : 'text-gray-900'
                                                    }`}
                                                >
                                                    {type}
                                                </RadioGroup.Label>
                                                
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                            </div>
                                        </>
                                        )}
                                    </RadioGroup.Option>
                                    ))}
                                </div>
                                </RadioGroup>
                            </div>
                        </div>

                    </div>

                    <div className="mt-4">
                        <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                        >
                        Submit
                        </button>
                    </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
        </>
    )
}