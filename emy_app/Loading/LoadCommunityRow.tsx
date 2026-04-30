"use client"
import Title from "@/components/atoms/Title";
import { IoIosArrowDown } from "react-icons/io";

  
  export default function LoadCommunityRow(){
  return (
    <>
        <li
        className={`flex flex-row flex-wrap justify-center items-center 
            shadow-xl dark:shadow-black/30
            bg-white dark:bg-gray-800
            text-gray-100 dark:text-gray-100
            rounded-xl max-sm:flex-col`}
        >
        <div className="flex-50 animate-pulse text-gray-100 bg-gray-100 h-50 overflow-hidden rounded-xl w-full max-sm:hidden dark:opacity-15 dark:text-gray-600 dark:bg-gray-600">
            image
            
        </div>
        <div className="animate-pulse bg-gray-100 h-48 overflow-hidden rounded-xl w-full min-sm:hidden dark:text-gray-600 dark:bg-gray-600 dark:opacity-15">
        </div>

        <div
            className={`flex flex-50 flex-col flex-nowrap p-2 justify-center items-center h-full dark:opacity-15
            overflow-hidden w-full`}
        >
            <Title
            as="h2"
            children={'fff'}
            className="flex-10 h-10 bg-gray-100 text-gray-100 animate-pulse w-100 mb-2 max-sm:hidden dark:text-gray-600 dark:bg-gray-600"
            />

            <div className="max-sm:hidden flex-50 text-center bg-gray-100 animate-pulse h-20 w-full text-gray-100 dark:text-gray-600 dark:bg-gray-600 mb-2">
            h
            </div>
            <div className="flex-50 text-center bg-gray-100 animate-pulse w-40 text-gray-100 dark:text-gray-600 dark:bg-gray-600 mb-2">
            h
            </div>

            <footer className="max-sm:hidden flex flex-row justify-between items-center w-full flex-20 text-gray-100 dark:text-gray-600 dark:bg-gray-600">
            <span className="flex-50 flex flex-col justify-center items-start  items-center">
                <div className="flex-50 text-center bg-gray-100 animate-pulse w-40 text-gray-100 dark:text-gray-100 mb-2">
                    h
                </div>
                <div className="flex-50 text-center bg-gray-100 animate-pulse w-40 text-gray-100 dark:text-gray-100 mb-2">
                    h
                </div>
                <div className="flex-50 text-center bg-gray-100 animate-pulse w-40 text-gray-100 dark:text-gray-100 mb-2">
                    h
                </div>
            </span>

            <span className="flex-50 flex flex-col justify-center items-end">
                
                <div className="flex-50 text-center bg-gray-100 animate-pulse w-40 text-gray-100 dark:text-gray-100 mb-2">
                    h
                </div>

                
                <div className="flex-50 text-center bg-gray-100 animate-pulse w-40 text-gray-100 dark:text-gray-100 mb-2">
                    h
                </div>
            </span>
            </footer>
        </div>

        <IoIosArrowDown
            className={`hover:cursor-pointer hidden max-sm:block bg-gray-100 animate-pulse mb-1 text-gray-100 dark:text-gray-600 dark:bg-gray-600`}
        />
        </li>
    </>
  )
}