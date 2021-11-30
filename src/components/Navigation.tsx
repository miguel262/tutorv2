import { Stack } from "@chakra-ui/react";
import { FaHome, FaLock } from "react-icons/fa";
import { useAuth } from "./Auth";
import { DarkModeToggle } from "./DarkModeToggle";
import { ScrollArea } from "./ScrollArea";
import { SidebarLink } from "./SidebarLink";

import { NavSectionTitle } from "./NavSectionTitle";

export function Navigation() {
  const { user } = useAuth();
  return (
    <ScrollArea pt="5" pb="6">
      <Stack pb="6">
        <SidebarLink icon={<FaHome />} href="/">
          Home
        </SidebarLink>

        {user && (
          <SidebarLink icon={<FaLock />} href="/protected">
            Protected
          </SidebarLink>
        )}
      </Stack>

      <Stack pb="6">
      {user && ( <>
      <NavSectionTitle>Factorización</NavSectionTitle>
        <SidebarLink  href="/1"> Factor Común</SidebarLink>
        <SidebarLink  href="/2"> Factor Común Compuesto</SidebarLink>
        <SidebarLink  href="/3"> Diferencia de Cuadradros</SidebarLink>
        <SidebarLink  href="/4"> Diferencia y Suma de Cubos</SidebarLink>
        <SidebarLink  href="/5"> Trinomios Cuadráticos</SidebarLink>
        </>
        )}
      </Stack>

      <Stack alignItems="center">
        <DarkModeToggle />
      </Stack>
    </ScrollArea>
  );
}
