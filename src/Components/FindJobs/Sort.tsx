import { useState } from 'react';
import { Combobox, useCombobox, } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

const opt = ['Relevance', 'Most Recent', 'Salary (Low to High)', 'Salary (Hight to Low)'];
const Sort=()=>{
  const [selectedItem, setSelectedItem] = useState<string | null>("Releavance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = opt.map((item) => (
    <Combobox.Option className='text-xs' value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    
      <Combobox
        store={combobox}
        width={150}
        position="bottom-end"
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div className='border border-bright-sun-400 flex gap-1 text-sm items-center px-2 py-1 rounded-lg font-normal'>
            {selectedItem} <IconAdjustments className='text-bright-4 h-5 w-5 cursor-pointer' onClick={()=>combobox.toggleDropdown()}/>
          </div>
        </Combobox.Target>

        <Combobox.Dropdown >
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
  );
}

export default Sort;