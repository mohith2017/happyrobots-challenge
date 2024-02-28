"use client"
import { useEffect, useRef, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { Button } from "@/components/ui/button"
import React from "react";
import transcript from '../../public/transcript.json'; 


interface Props { }

export default function Highlight({ }: Props) {
  // const [selectedText, setSelectedText] = useState<string>("");


  // const getSelectedText = () => {
  //   let text = "";
  //   if (window.getSelection) {
  //       text = window.getSelection()!.toString();
  //   }
  //   return text;
  // };
  

  // const handleSelection = () => {
  //   const text = getSelectedText();
  //   setSelectedText(text);
  // };

  const [showPopover, setShowPopover] = React.useState<boolean>(false);

  useEffect(() => {
    const handleMouseUp = () => {
      const selectedText = window.getSelection()?.toString();
      setShowPopover(!!selectedText);
    };

    const handleKeyupEvent = (e:any) => {
      const selectedText = window.getSelection()?.toString();
      setShowPopover(!!selectedText);
    };

    addEventListener("mouseup", handleMouseUp);
    addEventListener("keyup", handleKeyupEvent);
   

    return () => {
      removeEventListener("mouseup", handleMouseUp);
      removeEventListener("keyup", handleKeyupEvent);
    };
  }, []);

  const llm = ""//GPT-3.5

  

  const handleMouseEvent = (e:any) => {
    const selectedText = window.getSelection()?.toString();
    setShowPopover(!!selectedText);
    console.log(!!selectedText);

  

    // const prompt  = `
    // Typescript -  ${format.json(```
  

    // ```) }
    // Follow the above guidelines carefully and generate the response in that format
    // `;

    //prompt  + llm + selected_text

  };

  // Idea to highlight those keywords
  const handleKeyupEvent = (e:any) => {
    const selectedText = window.getSelection()?.toString();
    setShowPopover(!!selectedText);
    console.log(!!selectedText);
  //   const newText = text.replace(
  //     selectedText,
  // `<mark class="highlight">${selectedText}</mark>`
// );
  };



  return (
    <div className="mt-24 mx-24" >
      
      
      
      {transcript.map((item: any) => (
        <div className="mt-24 mx-4">
          <Popover >
          <PopoverTrigger asChild>
            <Label htmlFor="ref">{item.role} : {item.content} </Label>
          </PopoverTrigger>
          {showPopover && (
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Magic cursor</h4>
                <AutoFixHighIcon />
                <p className="text-sm text-muted-foreground">
                  Changes you'd like to make for the selected text
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Prompt</Label>
                  <Input
                    id="width"
                    defaultValue="Change the tone"
                    className="col-span-2 h-8"
                  />
                </div>
                </div>
              </div>
          </PopoverContent>
             )}
        </Popover>
        </div>
       
       ))}
    </div>
    
  )


}