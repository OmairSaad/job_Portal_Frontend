import React, { useEffect, useState } from 'react';
import { Checkbox, Combobox, Group, Input, Pill, PillsInput, ScrollArea, useCombobox } from '@mantine/core';
import { IconProps, IconSelector } from '@tabler/icons-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../Store';
import { updateFilter } from '../../Slices/FilterSlice';
interface itemInterface {
    item: {
        title: string,
        options: string[],
        icon: React.ComponentType<IconProps>
    }
}


const MultiInput = ({ item }: itemInterface) => {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        setData(item.options)
    }, [item])
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const [search, setSearch] = useState('');
    const [data, setData] = useState<string[]>([]);
    const [value, setValue] = useState<string[]>([]);

    const exactOptionMatch = data.some((item) => item === search);

    const handleValueSelect = (val: string) => {
        setSearch('');

        if (val === '$create') {
            const newValue = [...value, search];
            setData((current) => [...current, search]);
            setValue((current) => [...current, search]);
            dispatch(updateFilter({ [item.title.toLowerCase()=="job title"? "roles":item.title.toLowerCase()]: newValue })); // ✅ dispatch new array
        } else {
            const newValue = value.includes(val) ? value.filter((v) => v !== val) : [...value, val]
            setValue(newValue);
            setValue(newValue);   
            dispatch(updateFilter({ [item.title.toLowerCase()=="job title"? "roles":item.title.toLowerCase()+'s']: newValue })); // ✅ dispatch new array
    
        }
    };

    const handleValueRemove = (val: string)=> {
          const newValue = value.filter((v) => v !== val);
     setValue(newValue);
     dispatch(updateFilter({ [item.title.toLowerCase()]: newValue })); // ✅ dispatch on remove

    }


    const values = value
        .slice(0, 1)
        .map((item) => (
            <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
                {item}
            </Pill>
        ));

    const options = data.filter((item) => item.toLowerCase().includes(search.trim().toLowerCase())).map((item) => (
        <Combobox.Option value={item} key={item} active={value.includes(item)}>
            <Group gap="sm">
                <Checkbox
                    checked={value.includes(item)}
                    onChange={() => { }}
                    aria-hidden
                    tabIndex={-1}
                    style={{ pointerEvents: 'none' }}
                    color='bright-sun.4'
                    size='xs'
                />
                <span>{item}</span>
            </Group>
        </Combobox.Option>
    ));

    return (
        <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
            <Combobox.DropdownTarget>
                <PillsInput variant='unstyled' rightSection={<IconSelector />} pointer onClick={() => combobox.toggleDropdown()} leftSection={< item.icon className='text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full mr-1 cursor-pointer' />}>
                    <Pill.Group>
                        {value.length > 0 ? (
                            <>
                                {values}
                                {value.length > 1 && (
                                    <Pill>+{value.length - 1} more</Pill>
                                )}
                            </>
                        ) : (
                            <Input.Placeholder className='!text-mine-shaft-200'>{item.title}</Input.Placeholder>
                        )}

                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>

                <Combobox.Search
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    placeholder="Search"

                />

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

export default MultiInput;