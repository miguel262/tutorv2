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
        <SidebarLink  href="/EjemploTC"> Ejemplo de Trinomio Cuadrático</SidebarLink>
        <SidebarLink  href="/FC1"> Factor Común I</SidebarLink>
        <SidebarLink  href="/FC2"> Factor Común II</SidebarLink>
        <SidebarLink  href="/FCC1"> Factor Común Compuesto I</SidebarLink>
        <SidebarLink  href="/DC1"> Diferencia de Cuadradros I</SidebarLink>
        <SidebarLink  href="/DSC1"> Diferencia/Suma de Cubos I</SidebarLink>
        <SidebarLink  href="/DSC2"> Diferencia/Suma de Cubos II</SidebarLink>
        <SidebarLink  href="/TC1"> Trinomios Cuadráticos I</SidebarLink>
        <SidebarLink  href="/TC2"> Trinomios Cuadráticos II</SidebarLink>
        </>
        )}
      </Stack>

      <Stack alignItems="center">
        <DarkModeToggle />
      </Stack>
    </ScrollArea>
  );
}
