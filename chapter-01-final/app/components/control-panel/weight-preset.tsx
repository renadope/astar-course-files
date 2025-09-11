import { useGridContext } from '~/state/context';
import { type ComponentPropsWithoutRef, useState } from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover';
import { Button } from '~/components/ui/button';
import { capitalize } from '~/utils/helpers';
import { weightPresets } from '~/presets/weights';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '~/components/ui/command';
import type { CostAndWeightKind } from '~/utils/grid-weights';
import { cn } from '~/lib/utils';

export function WeightPreset({
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  const { state, dispatch } = useGridContext();
  const [weightPresetOpen, setWeightPresetOpen] = useState(false);
  return (
    <div className={cn('flex flex-col space-y-2')} {...props}>
      <label className="text-muted-foreground text-sm font-medium">
        Select Weight Preset
      </label>
      <Popover open={weightPresetOpen} onOpenChange={setWeightPresetOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={weightPresetOpen}
            className="w-full justify-between"
          >
            {capitalize(
              weightPresets.find(
                weightPreset => weightPreset.value === state.weightPreset.name
              )?.label ?? 'no selection'
            )}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <Command>
            <CommandInput placeholder="Search Preset..." />
            <CommandList>
              <CommandEmpty>No Preset found.</CommandEmpty>
              <CommandGroup>
                {weightPresets.map(weightPresetInfo => (
                  <CommandItem
                    key={weightPresetInfo.value}
                    value={weightPresetInfo.value}
                    onSelect={(currentValue: string) => {
                      dispatch({
                        type: 'SET_WEIGHT_PRESET',
                        payload: currentValue as CostAndWeightKind,
                      });
                      setWeightPresetOpen(false);
                    }}
                  >
                    {weightPresetInfo.emoji} {weightPresetInfo.label}
                    <Check
                      className={cn(
                        'ml-auto',
                        state.weightPreset.name === weightPresetInfo.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
