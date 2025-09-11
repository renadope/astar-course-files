import { type ComponentPropsWithoutRef } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { Button } from '~/components/ui/button';
import { ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from '~/components/ui/command';
import { cn } from '~/lib/utils';

export function WeightPreset({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  /*TODO:
     - Get Dispatch function from useGridContext
     - Create a boolean useState variable to show/close the popover
     */
  return (
    <div className={cn('flex flex-col space-y-2')} {...props}>
      <label className="text-muted-foreground text-sm font-medium">
        Select Weight Preset
      </label>
      {/*TODO: Replace open with the state variable and the onOpenChange with the setter function of the state*/}
      <Popover open={false} onOpenChange={() => {}}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            // TODO: Replace open with the state variable and the onOpenChange with the setter function of the state
            aria-expanded={false}
            className="w-full justify-between"
          >
            {/*TODO: Display the current name of the selected preset, if the name doesnt exist, show no selection         */}
            No Selection
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <Command>
            <CommandInput placeholder="Search Preset..." />
            <CommandList>
              <CommandEmpty>No Preset found.</CommandEmpty>
              <CommandGroup>
                {/*TODO: USe weight presets to create command items, so we can dispatch different presets for grid generation */}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
