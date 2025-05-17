import { useEffect, useState } from 'react';
import { Combobox, InputBase, ScrollArea, useCombobox } from '@mantine/core';
import {  IconProps } from '@tabler/icons-react';
interface SelectIn {
    field:{
        label:string,
        placeholder:string,
        options:string[],
        icon: React.ComponentType<IconProps>
    },
    setField: string,
    info:(a:string,b:string)=>void,
    name:string
}
const SelectInput = ({ field,setField, info, name}: SelectIn) => {
    useEffect(() => {
        setData(field.options)
        setValue(setField)
        setSearch(setField)
    }, [field,setField])
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const [data, setData] = useState<string[]>([]);
    const [value, setValue] = useState<string | null>(null);
    const [search, setSearch] = useState('');

    const exactOptionMatch = data.some((item) => item === search);
    const filteredOptions = exactOptionMatch
        ? data
        : data.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()));

    const options = filteredOptions.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <Combobox
            store={combobox}
            withinPortal={false}
            onOptionSubmit={(val) => {
               
                if (val === '$create') {
                    setData((current) => [...current, search]);
                    setValue(search);
                    info(name, search)
                } else {
                    setValue(val);
                    setSearch(val);
                    info(name, val)
                }

                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase withAsterisk className='[&_input]:placeholder:text-mine-shaft-300 [&_input]:font-medium'
                    label={field.label}
                    rightSection={<Combobox.Chevron />}
                    value={search}
                    leftSection ={<field.icon className='h-4 w-4' />}
                    onChange={(event) => {
                        combobox.openDropdown();
                        combobox.updateSelectedOptionIndex();
                        setSearch(event.currentTarget.value);   
                    }}
                    onClick={() => combobox.openDropdown()}
                    onFocus={() => combobox.openDropdown()}
                    onBlur={() => {
                        combobox.closeDropdown();
                        setSearch(value || '');
                    }}
                    placeholder={field.placeholder}
                    rightSectionPointerEvents="none"
                />
            </Combobox.Target>

            <Combobox.Dropdown>
                <Combobox.Options>
                    <ScrollArea.Autosize mah={200} type="scroll">
                        {options}
                        {!exactOptionMatch && search.trim().length > 0 && (
                            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
                        )}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}
export default SelectInput;