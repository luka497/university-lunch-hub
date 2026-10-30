import { describe, expect, test } from "bun:test";
import { DIAS, estadoDe, platosIniciales } from "./casino-data";
import { CATEGORIAS_MENU, menuDelDia } from "./menu-diario";

describe("Menú diario", () => {
  test("cada día incluye las siete categorías solicitadas", () => {
    expect(CATEGORIAS_MENU.map((c) => c.id)).toEqual(["sopa", "ensalada", "fondo-a", "fondo-b", "postres", "vegetariano", "hipocalorico"]);
    for (const dia of DIAS) {
      expect(new Set(menuDelDia(dia.id, platosIniciales()).map((p) => p.categoria)).size).toBe(7);
    }
  });
  test("solo los cuatro fondos tienen disponibilidad para las dos ubicaciones", () => {
    for (const p of menuDelDia("lun", platosIniciales())) {
      const esFondo = ["fondo-a", "fondo-b", "vegetariano", "hipocalorico"].includes(p.categoria);
      expect(p.disponibilidad.map((d) => d.ubicacion)).toEqual(esFondo ? ["Patio central", "Casino P"] : []);
    }
  });
  test("el estado del fondo B es independiente por ubicación y del fondo A", () => {
    const menu = menuDelDia("lun", platosIniciales());
    const b = menu.find((p) => p.categoria === "fondo-b");
    const a = menu.find((p) => p.categoria === "fondo-a");
    expect(b?.disponibilidad.map((d) => estadoDe(d.plato))).toEqual(["disponible", "por-agotar"]);
    expect(a?.disponibilidad.map((d) => estadoDe(d.plato))).toEqual(["disponible", "disponible"]);
  });
  test("un cambio en stock compartido se refleja únicamente en la ubicación afectada", () => {
    const platos = platosIniciales().map((p) => p.key === "lun|edificio-p|comun" ? { ...p, canjeadas: p.producidas } : p);
    const a = menuDelDia("lun", platos).find((p) => p.categoria === "fondo-a");
    expect(a?.disponibilidad.map((d) => estadoDe(d.plato))).toEqual(["disponible", "agotado"]);
  });
});