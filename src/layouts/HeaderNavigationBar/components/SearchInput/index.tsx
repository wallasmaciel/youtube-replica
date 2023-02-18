import { Keyboard, MagnifyingGlass, Microphone, X } from "phosphor-react";
import { FormEvent, RefObject } from "react";
import { ButtonSimple } from "../../../../components/ButtonSimple";
import { TextInput } from "../../../../components/TextInput";

type SearchInputProps = {
  searchInputRef: RefObject<HTMLInputElement>,
  handleSearch: (e: FormEvent<HTMLFormElement>) => void,
}

export function SearchInput({ searchInputRef, handleSearch }: SearchInputProps) {
  function clearText() {
    if (searchInputRef.current) {
      searchInputRef.current.value = ""
      searchInputRef.current.focus()
    }
  }

  return (
    <form className="flex h-9 w-full" onSubmit={ handleSearch }>
      <TextInput.Content customClassName="rounded-r-none w-full">
          <TextInput.Input placeholder="Pesquisar"
              ref={ searchInputRef }/>
          <TextInput.Icon>
              <Keyboard size={ 18 } className="text-state-100/80" />
          </TextInput.Icon>

          <TextInput.Icon>
              <X size={ 18 } className="text-state-100/80"
                onClick={ clearText }/>
          </TextInput.Icon>
      </TextInput.Content>

      <button type="submit" title="Search" className="ml-[0.13rem] bg-zinc-600 py-2 px-4 border-zinc-600 rounded-full 
          rounded-l-none ring-zinc-600 ring-1">
          <MagnifyingGlass size={ 16 } className="text-state-100/80" />
      </button>

      <ButtonSimple title="Search by voice" className="ml-2">
          <Microphone size={ 16 } weight="fill" className="text-state-100/80" />
      </ButtonSimple> 
  </form>
  )
}
